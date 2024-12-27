package The_Bridge.Repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import The_Bridge.Entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {}

