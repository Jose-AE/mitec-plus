"use client";

import React, { useEffect, useRef, useState } from "react";
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
import { getCookie } from "cookies-next";
import demo_classes from "@/app/demo_data/classes";

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

function formatClasses(classes: any) {
  const classesAsDays: any[] = [];
  for (let c of classes) {
    let classColor = "#";
    const startDate = new Date(c.classStartDate);
    const endDate = new Date(c.classEndDate);
    const daysOfWeek = c.days;

    //random specific color to class:
    let hash = 8; // seed
    c.id.split("").forEach((char: string) => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash);
    });

    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      classColor += value.toString(16).padStart(2, "0");
    }
    ///////

    let currentDate = startDate;
    while (currentDate <= endDate) {
      const dayOfWeek = currentDate.getDay();
      const dayAbbreviation = ["SU", "M", "T", "W", "R", "F", "SA"];

      if (daysOfWeek?.includes(dayAbbreviation[dayOfWeek])) {
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
        const day = currentDate.getDate().toString().padStart(2, "0");

        const dayObject = {
          title: c.name,
          start: `${year}-${month}-${day}T${c.classStartTime}`,
          end: `${year}-${month}-${day}T${c.classEndTime}`,
          color: classColor,

          teachers: c.teachers.map((t: any) => t.name),
          location: `${c.classBuilding} ${c.classroom}`,
          group: c.group,
          time: `${c.classStartTime} a ${c.classEndTime}`,
        };

        classesAsDays.push(dayObject);
      }

      currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    }
  }
  return classesAsDays;
}

export default function Page() {
  const calendarRef = useRef(null);

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

  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    if (getCookie("token")) {
      if (JSON.parse(getCookie("token") as string).demo === "true") {
        (calendarRef.current as InstanceType<any>)
          .getApi()
          ?.gotoDate(new Date("2023-04-02"));

        setEvents(formatClasses(demo_classes));
      } else {
        axios
          .get(process.env.NEXT_PUBLIC_DOMAIN + "/api/classes")
          .then((res) => {
            const classes = res.data;
            setEvents(formatClasses(classes));
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
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
      {events.length > 0 ? `Numero de clases cursadas: ${events.length}` : ""}
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
      <FullCalendar ref={calendarRef} {...calendarOptions} />
    </>
  );
}
