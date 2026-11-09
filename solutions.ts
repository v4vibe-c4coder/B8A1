function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

function processInput(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toLowerCase().trim();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
}

function formatCoordinate([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]): string {
  return "Location: " + locationName + " (" + latitude + ", " + longitude + ")";
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((result, current) => {
    return result.concat(current);
  }, []);
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
}
