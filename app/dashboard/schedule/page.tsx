"use client";

import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { BiGroup, BiMap, BiTimeFive } from "react-icons/bi";
import {
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";

interface EventInterface {
  title: string;
  start: Date;
  end: Date;

  extendedProps: {
    teachers: string[];
    location: string;
    group: string;
    time: string;
  };
}

interface ClassInterface {
  id: string;
  name: string;
  classStartDate: string;
  classEndDate: string;
  classStartTime: string;
  classEndTime: string;
  days: string[];
  group: string;
  classBuilding: string;
  classroom: string;
  teachers: { id: string; name: string }[];
}

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [eventTitle, setEventTitle] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventPeople, setEventPeople] = useState<string[]>([]);
  const [eventGroup, setEventGroup] = useState("");

  function handleEventClick(clickInfo: { event: EventInterface }) {
    onOpen();
    setEventTitle(clickInfo.event.title);
    setEventTime(clickInfo.event.extendedProps.time);
    setEventLocation(clickInfo.event.extendedProps.location);
    setEventPeople(clickInfo.event.extendedProps.teachers);
    setEventGroup(clickInfo.event.extendedProps.group);
  }

  const [events, setEvents] = useState<EventInterface[]>([]);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_DOMAIN + "/api/classes")
      .then((res) => {
        setEvents(
          res.data
            .map((c: ClassInterface) => {
              const {
                name,
                classStartDate,
                classEndDate,
                classStartTime,
                classEndTime,
                days,
                teachers,
                classroom,
                classBuilding,
                group,
              } = c;

              // Calculate the start and end dates for the class
              const startDate = new Date(classStartDate);
              const endDate = new Date(classEndDate);
              endDate.setDate(endDate.getDate() + 1); // Add 1 day to include the end date

              const eventDays = days.map((day: string) => {
                const dayIndex = ["SU", "M", "T", "W", "R", "F", "SA"].indexOf(
                  day
                );
                const eventStart = new Date(startDate);
                eventStart.setDate(
                  eventStart.getDate() +
                    ((dayIndex - startDate.getDay() + 7) % 7)
                );
                eventStart.setHours(
                  Number(classStartTime.split(":")[0]),
                  Number(classStartTime.split(":")[1])
                );
                const eventEnd = new Date(eventStart);
                eventEnd.setHours(
                  Number(classEndTime.split(":")[0]),
                  Number(classEndTime.split(":")[1])
                );

                return {
                  title: name,
                  start: eventStart,
                  end: eventEnd,
                  teachers: teachers.map((t) => t.name),
                  location: `${classBuilding} ${classroom}`,
                  group,
                  time: `${classStartTime} a ${classEndTime}`,
                  color: `#${Math.floor(Math.random() * 16777215).toString(
                    16
                  )}`,
                };
              });

              return eventDays;
            })
            .flat()
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const calendarOptions: any = {
    plugins: [timeGridPlugin],
    initialView: "timeGridWeek",
    events: events,
    eventClick: handleEventClick,

    slotMinTime: "05:00",
    slotMaxTime: "21:00",
    allDaySlot: false,
    height: "900px",
  };

  return (
    <>
      <Modal isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {eventTitle}
            {` (${eventGroup})`}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BiTimeFive} />
                {eventTime}
              </ListItem>
              <ListItem>
                <ListIcon as={BiMap} />
                {eventLocation}
              </ListItem>

              {eventPeople.map((p, i) => (
                <ListItem key={i}>
                  <ListIcon as={AiOutlineUser} />
                  {p}
                </ListItem>
              ))}
            </List>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <FullCalendar {...calendarOptions} />
    </>
  );
}
