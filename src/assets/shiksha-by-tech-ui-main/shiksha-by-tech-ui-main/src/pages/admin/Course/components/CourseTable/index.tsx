import Table from "@/components/Table";
import TableBody from "@/components/Table/components/TableBody";
import TableCell from "@/components/Table/components/TableCell";
import TableHead from "@/components/Table/components/TableHead";
import TableRow from "@/components/Table/components/TableRow";
import Checkbox from "@/components/ui/Checkbox";
import { useState } from "react";

interface Course {
  id: number;
  name: string;
  role: string; // You can replace this with 'instructor', 'category', or 'status'
}

const courseData: Course[] = [
  { id: 1, name: "Introduction to React", role: "Frontend" },
  { id: 2, name: "Advanced JavaScript", role: "Frontend" },
  { id: 3, name: "Node.js API Development", role: "Backend" },
  { id: 4, name: "Database Design with PostgreSQL", role: "Database" },
  { id: 5, name: "Machine Learning Basics", role: "AI/ML" },
  { id: 6, name: "UI/UX Fundamentals", role: "Design" },
  { id: 7, name: "TypeScript in Depth", role: "Frontend" },
  { id: 8, name: "Clean Architecture in .NET", role: "Backend" },
  { id: 9, name: "Cybersecurity Essentials", role: "Security" },
  { id: 10, name: "Docker & Kubernetes", role: "DevOps" },
];

function CourseTable(props: any) {
  const { toggleForm, isOpen } = props;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  return (
    <section>
      <Table
        isOpen={isOpen}
        limit={limit}
        page={page}
        total={5}
        onAdd={toggleForm}
        onPageChange={(page) => setPage(page)}
        onRowsPerPageChange={(limit) => setLimit(limit)}
      >
        <TableHead>
          <TableRow>
            <TableCell isHeader>
              <Checkbox />
            </TableCell>
            <TableCell isHeader>ID</TableCell>
            <TableCell isHeader>Name</TableCell>
            <TableCell isHeader>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courseData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default CourseTable;
