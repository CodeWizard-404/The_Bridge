package The_Bridge.Backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import The_Bridge.Backend.Entities.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {}
