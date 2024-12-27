package The_Bridge.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import The_Bridge.Entities.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {}