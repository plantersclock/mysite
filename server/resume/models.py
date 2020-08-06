from django.db import models

from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.core.models import Page
from wagtail.core.fields import StreamField

from wagtail.api import APIField

from streams import blocks


class ResumePage(Page):
    max_count = 1

    content = StreamField([("jobs", blocks.Jobs())], null=True, blank=True)

    subtitle = models.CharField(max_length=100, null=True, blank=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    job_titles = models.CharField(max_length=100, null=True, blank=True)
    about = models.TextField(max_length=500, null=True, blank=True)
    linked_in = models.URLField(max_length=100, null=True, blank=True)
    github = models.URLField(max_length=100, null=True, blank=True)
    email = models.EmailField(max_length=100, null=True, blank=True)
    location = models.CharField(max_length=150, null=True, blank=True)

    content_panels = Page.content_panels + [
        FieldPanel("subtitle"),
        FieldPanel("name"),
        FieldPanel("job_titles"),
        FieldPanel("about"),
        FieldPanel("linked_in"),
        FieldPanel("github"),
        FieldPanel("email"),
        FieldPanel("location"),
        StreamFieldPanel("content"),
    ]

    api_fields = [
        APIField("subtitle"),
        APIField("name"),
        APIField("job_titles"),
        APIField("about"),
        APIField("linked_in"),
        APIField("github"),
        APIField("email"),
        APIField("location"),
        APIField("content"),
    ]
