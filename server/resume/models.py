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

    content_panels = Page.content_panels + [
        FieldPanel("subtitle"),
        StreamFieldPanel("content"),
    ]

    api_fields = [
        APIField("subtitle"),
        APIField("content"),
    ]
