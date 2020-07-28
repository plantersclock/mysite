from django.db import models

from wagtail.api import APIField
from wagtail.images.api.fields import ImageRenditionField

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel


class AboutMePage(Page):
    """About Me Page"""

    max_count = 1

    about_me_summary = RichTextField()
    about_me_headshot = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    api_fields = [
        APIField("about_me_summary"),
        APIField(
            "image_500_x_500",
            serializer=ImageRenditionField(
                "max-500x500", source="about_me_headshot"
            ),
        ),
        APIField(
            "image_200_x_200",
            serializer=ImageRenditionField(
                "max-200x200", source="about_me_headshot"
            ),
        ),
    ]

    content_panels = Page.content_panels + [
        FieldPanel("about_me_summary"),
        ImageChooserPanel("about_me_headshot"),
    ]

    pass
