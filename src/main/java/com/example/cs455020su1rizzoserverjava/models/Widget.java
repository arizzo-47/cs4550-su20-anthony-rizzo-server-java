package com.example.cs455020su1rizzoserverjava.models;

public class Widget {

    private String name;
    private String type;
    private Integer id;
    private String topicId;
    private String text;
    private String size;

    public Widget() {
    }

    public Widget(Integer id, String name, String type) {
        this.name = name;
        this.type = type;
        this.id = id;
    }
    public Widget(Integer id, String name, String type, String topicId) {
        this.name = name;
        this.type = type;
        this.id = id;
        this.topicId = topicId;
    }
    public Widget(Integer id, String name, String type, String topicId, String text) {
        this.name = name;
        this.type = type;
        this.id = id;
        this.topicId = topicId;
        this.text = text;
    }
    public Widget(Integer id, String name, String type, String topicId, String text, String size) {
        this.name = name;
        this.type = type;
        this.id = id;
        this.topicId = topicId;
        this.text = text;
        this.size = size;
    }

    //Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setSize(String size) {
        this.size = size;
    }

    //Getters
    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public Integer getId() {
        return id;
    }

    public String getTopicId() {
        return topicId;
    }

    public String getText() {
        return text;
    }

    public String getSize() {
        return size;
    }
}
