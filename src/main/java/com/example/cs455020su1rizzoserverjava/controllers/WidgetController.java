package com.example.cs455020su1rizzoserverjava.controllers;

import com.example.cs455020su1rizzoserverjava.models.Widget;
import com.example.cs455020su1rizzoserverjava.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class WidgetController {
    @Autowired
    WidgetService widgetService;

    @PutMapping("/api/widgets/{wid}")
    public Widget updateWidget(
            @PathVariable("wid") Integer widgetId,
            @RequestBody Widget updatedWidget) {
        return widgetService.updateWidget(widgetId, updatedWidget);
    }

    @PostMapping("/api/widgets")
    public Widget createStandaloneWidget(
            @RequestBody Widget newWidget) {
        return widgetService.createWidget(newWidget);
    }

    @PostMapping("/api/topics/{tid}/widgets")
    public Widget createWidget(
            @PathVariable("tid") String topicId,
            @RequestBody Widget newWidget) {
        newWidget.setTopicId(topicId);
        return widgetService.createWidget(newWidget);
    }

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidgets() {
        return widgetService.findAllWidgets();
    }

    @GetMapping("/api/widgets/{widgetId}")
    public Widget findWidgetById(@PathVariable("widgetId") Integer wid) {
        return widgetService.findWidgetById(wid);
    }

    @GetMapping("/api/topics/{topicId}/widgets")
    public List<Widget> findWidgetForTopic(@PathVariable("topicId") String tid) {
        return widgetService.findWidgetForTopic(tid);
    }

    @DeleteMapping("/api/widgets/{widgetId}")
    public List<Widget> deleteWidget(@PathVariable ("widgetId") Integer wid) {
        return widgetService.deleteWidget(wid);
    }

}
