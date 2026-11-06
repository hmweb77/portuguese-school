const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const COURSES_2027 = [
  {
    name: "Winter Immersion Experience",
    start: [2027, 1, 18],
    end: [2027, 3, 26],
  },
  {
    name: "Spring Immersion Experience",
    start: [2027, 4, 12],
    end: [2027, 6, 18],
  },
  {
    name: "Summer Immersion Experience",
    start: [2027, 7, 5],
    end: [2027, 9, 10],
  },
  {
    name: "Autumn Immersion Experience",
    start: [2027, 10, 4],
    end: [2027, 12, 10],
  },
];

function toLocalDate([year, month, day]) {
  return new Date(year, month - 1, day);
}

function lisbonToday(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Lisbon",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const value = (type) => Number(parts.find((part) => part.type === type).value);
  return new Date(value("year"), value("month") - 1, value("day"));
}

function toIso([year, month, day]) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function formatCourseRange(course) {
  const [, startMonth, startDay] = course.start;
  const [endYear, endMonth, endDay] = course.end;
  return `${startDay} ${MONTHS[startMonth - 1]} – ${endDay} ${MONTHS[endMonth - 1]} ${endYear}`;
}

export function getNextCourse(now = new Date()) {
  const today = lisbonToday(now);
  const upcoming = COURSES_2027.find((course) => toLocalDate(course.start) >= today);
  return upcoming ?? COURSES_2027[COURSES_2027.length - 1];
}

export function getNextCourseLabel(now = new Date()) {
  return formatCourseRange(getNextCourse(now));
}

export function getNextCourseStart(now = new Date()) {
  return toLocalDate(getNextCourse(now).start);
}

export function getNextCourseIso(now = new Date()) {
  const course = getNextCourse(now);
  return {
    label: formatCourseRange(course),
    startDate: toIso(course.start),
    endDate: toIso(course.end),
  };
}
