package com.example.cs455020su1rizzoserverjava.services;

import com.example.cs455020su1rizzoserverjava.models.Widget;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WidgetService {

    List<Widget> widgets = new ArrayList<>();
    {
        widgets.add(new Widget(123, "Widget 1", "HEADING", "t1", ""));
        widgets.add(new Widget(234, "Widget 2", "PARAGRAPH", "t1", ""));
        widgets.add(new Widget(456, "Widget 3", "PARAGRAPH", "t1", ""));
        widgets.add(new Widget(567, "Widget 4", "HEADING", "t1", ""));

    }

    public List<Widget> findAllWidgets() {
        return widgets;
    }

    public Widget findWidgetById(Integer wid) {
        for (Widget w: widgets) {
            if (w.getId().equals(wid)) {
                return w;
            }
        }
        return null;
    }

    public List<Widget> findWidgetForTopic(String tid) {
        List<Widget> result = new ArrayList<>();

        for (Widget w: widgets) {
            if (w.getTopicId().equals(tid)) {
                result.add(w);
            }
        }

        return result;
    }

    public List<Widget> deleteWidget(Integer wid) {
        List<Widget> result = new ArrayList<>();
        for (Widget w: widgets) {
            if (!w.getId().equals(wid) || w.getId() == null) {
                result.add(w);
            }
        }

        this.widgets = result;
        return result;
    }

    public Widget createWidget(Widget newWidget) {
        newWidget.setId(this.widgets.size() * 20);
        this.widgets.add(newWidget);
        return newWidget;
    }

    public Widget updateWidget(Integer widgetId, Widget updatedWidget) {
        for (int i=0; i<widgets.size(); i++) {
            if (widgets.get(i).getId().equals(widgetId)) {
                widgets.set(i, updatedWidget);
                return updatedWidget;
            }
        }

        return null;
    }
}
