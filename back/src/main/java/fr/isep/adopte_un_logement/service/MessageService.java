package fr.isep.adopte_un_logement.service;

import fr.isep.adopte_un_logement.entities.Message;
import fr.isep.adopte_un_logement.entities.User;
import fr.isep.adopte_un_logement.repositories.MessageRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Service
public class MessageService {

    private MessageRepository messageRepository;

    public Message addMessage(Message message){
        return messageRepository.save(message);
    }

    public Page<Message> getMessages(String readerId, String senderId, Pageable pageable){
        return messageRepository.getMessages(UUID.fromString(readerId), UUID.fromString(senderId), pageable);
    }

    public List<User> getLastUsers(String userId) {
        return messageRepository.getLastMessagedUsers(UUID.fromString(userId));
    }
}
