package swe574.backend.devcomReborn.template;

import swe574.backend.devcomReborn.community.Community;
import swe574.backend.devcomReborn.community.CommunityRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TemplateService {
    private final TemplateRepository templateRepository;
    private final FieldRepository fieldRepository;
    private final CommunityRepository communityRepository;

    @Transactional
    public Template createTemplate(Long communityId, Template template) {
        Community community = communityRepository.findById(communityId)
                .orElseThrow(() -> new RuntimeException("Community not found"));
        template.setCommunity(community);
        return templateRepository.save(template);
    }
    @Transactional
    public Field addFieldToTemplate(Long templateId, Field field) {
        Template template = templateRepository.findById(templateId)
                .orElseThrow(() -> new RuntimeException("Template not found"));
        field.setTemplate(template);
        return fieldRepository.save(field);
    }

    public List<Template> getTemplateList(Long communityId) {
        Community community = communityRepository.findById(communityId).orElseThrow();
        return templateRepository.findByCommunity(community);
    }

    public List<Field> getFields() {
        return fieldRepository.findAll();
    }

}
