package swe574.backend.devcomReborn.template;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import swe574.backend.devcomReborn.community.CommunityService;
import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/templates")
public class TemplateController {
    private final TemplateService templateService;
    private final CommunityService communityService;
    private final FieldRepository fieldRepository;

    @GetMapping("fields")
    public ResponseEntity<List<Field>> getFields(@PathVariable Long templateId) {
        return ResponseEntity.ok(templateService.getFields());
    }

    @GetMapping("list/{communityId}")
    public ResponseEntity<List<Template>> getTemplateList(@PathVariable Long communityId) {
        return ResponseEntity.ok(templateService.getTemplateList(communityId));
    }

    @PostMapping("/create/{communityId}")
    public ResponseEntity<Template> create(@PathVariable Long communityId, @RequestBody Template template) {
        return ResponseEntity.ok(templateService.createTemplate(communityId, template));
    }

    @PostMapping("/addField/{templateId}")
    public ResponseEntity<Field> addFieldToTemplate(@PathVariable Long templateId, @RequestBody Field field) {
        return ResponseEntity.ok(templateService.addFieldToTemplate(templateId, field));
    }
}
