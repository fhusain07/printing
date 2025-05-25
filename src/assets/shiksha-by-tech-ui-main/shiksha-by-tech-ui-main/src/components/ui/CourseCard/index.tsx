import { Course } from "@/features/app/course/course.types";
import React from "react";
import Button from "../Button";
import Typography from "../Typography";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="border-primary rounded-lg overflow-hidden shadow-sm bg-white flex flex-col">
      <img
        alt={course.title}
        className="w-full h-48 object-cover"
        src={course.image}
      />
      <div className="p-3 space-y-2 flex flex-col flex-grow">
        <div className="flex justify-between text-xs text-gray-500">
          <span>{course.duration}</span>
          <span>{course.level}</span>
        </div>
        <Typography className="text-gray-800 " variant="h4">
          {course.title}
        </Typography>
        <Typography className="flex-grow " variant="body-md">
          {course.description}
        </Typography>
        <div className="text-xs text-gray-500 mt-1">By {course.author}</div>
        <Button className="w-full" variant="secondary">
          Get it Now
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
