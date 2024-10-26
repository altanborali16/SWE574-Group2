package swe574.backend.devcomReborn.template;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/templates")
public class TemplateController {
    private final TemplateService templateService;

    private final FieldRepository fieldRepository;

    @GetMapping("fields")
    public ResponseEntity<List<Field>> getFields(@PathVariable Long templateId) {
        return ResponseEntity.ok(templateService.getFields());
    }

    @GetMapping("template-list/{communityId}")
    public ResponseEntity<List<Template>> getTemplateList(@PathVariable Long communityId) {
        return ResponseEntity.ok(templateService.getTemplateList(communityId));
    }
}
