package fr.isep.adopte_un_logement.repositories;

import fr.isep.adopte_un_logement.entities.Message;
import fr.isep.adopte_un_logement.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface MessageRepository extends JpaRepository<Message, UUID> {

    @Query("SELECT m\n" +
            "FROM Message m\n" +
            "WHERE (m.sender.id = :user1 AND m.receiver.id = :user2) OR (m.sender.id = :user2 AND m.receiver.id = :user1)\n" +
            "ORDER BY m.sendTime ASC")
    Page<Message> getMessages(UUID user1, UUID user2, Pageable pageable);

    @Query("SELECT DISTINCT CASE WHEN m.sender.id = :userId THEN m.receiver ELSE m.sender END\n" +
            "FROM Message m\n" +
            "WHERE m.receiver.id = :userId OR m.sender.id = :userId\n" +
            "ORDER BY m.sendTime DESC")
    List<User> getLastMessagedUsers(UUID userId);

}
