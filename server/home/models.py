from django.db import models

from wagtail.api import APIField

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel


class HomePage(Page):
    """Blog page model"""

    second_title = models.CharField(max_length=100, blank=False, null=True)
    subtitle = RichTextField(features=["bold","italic"])
    image = models.ForeignKey(
        "wagtailimages.Image", 
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+"
    )

    api_fields = [
        APIField("second_title"),
        APIField("subtitle"),
        APIField("image")
    ]

    content_panels = Page.content_panels + [
        FieldPanel("second_title"),
        FieldPanel("subtitle"),
        ImageChooserPanel("image")    
    ]

    pass
