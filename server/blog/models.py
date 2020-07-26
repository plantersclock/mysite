from django.db import models

# Create your models here.

from django.db import models

from wagtail.api import APIField
from wagtail.images.api.fields import ImageRenditionField

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel


class BlogPage(Page):
    blog_subtitle= models.CharField(max_length=100, blank=False, null=True)
    blog_post = RichTextField(features=["bold","italic"])
    blog_image = models.ForeignKey(
        "wagtailimages.Image", 
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+"
    )

    api_fields = [
        APIField("blog_subtitle"),
        APIField("blog_post"),
        APIField("image",
                serializer=ImageRenditionField(
                    'max-500x500',
                    source = "blog_image"
                )
            ),
    ]

    content_panels = Page.content_panels + [
        FieldPanel("blog_subtitle"),
        FieldPanel("blog_post"),
        ImageChooserPanel("blog_image")    
    ]
   

    pass