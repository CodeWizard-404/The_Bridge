package The_Bridge.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import The_Bridge.Entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);  // Fetch user by username
}