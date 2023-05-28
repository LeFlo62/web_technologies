package fr.isep.adopte_un_logement.repositories;

import fr.isep.adopte_un_logement.entities.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface MessageRepository extends JpaRepository<Message, UUID> {

    @Query("SELECT m\n" +
            "FROM Message m\n" +
            "WHERE (m.sender.id = :user1 AND m.receiver.id = :user2) OR (m.sender.id = :user2 AND m.receiver.id = :user1)\n" +
            "ORDER BY m.sendTime ASC")
    Page<Message> getMessages(UUID user1, UUID user2, Pageable pageable);

    @Query(value = "SELECT DISTINCT CASE WHEN m.sender_id = :userId THEN m.receiver_id ELSE m.sender_id END\n" +
            "FROM (SELECT receiver_id,sender_id FROM message AS m\n" +
            "      WHERE m.receiver_id = :userId OR m.sender_id = :userId\n" +
            "      ORDER BY m.send_time DESC) AS m", nativeQuery = true)
    List<UUID> getLastMessagedUsers(UUID userId);

}
