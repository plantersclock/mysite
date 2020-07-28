from django.db import models

from wagtail.api import APIField
from wagtail.images.api.fields import ImageRenditionField
from wagtail.images.models import Image

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel

from rest_framework.fields import Field


class BlogChildPagesSerializer(Field):
    def to_representation(self, child_pages):

        return_posts = []
        print(child_pages)
        for child in child_pages:
            print(BlogPage.objects.get(id=child.id).__dict__)
            print(Image.objects.get(id=1).file.url)
            post_dict = {
                "id": child.id,
                "title": child.title,
            }
            return_posts.append(post_dict)
        return return_posts
        # Pythonic way to do above
        # return [
        #     {
        #         "id": child.id,
        #         'title': child.title
        #     } for child in child_pages
        # ]


class BlogListingPage(Page):
    """Listing page that lists all of the Blog Detail Pages"""

    def get_context(self, request, *args, **kwargs):
        """Adding custom stuff to our context"""
        context = super().get_context(request, *args, *kwargs)
        return context

    api_fields = [
        APIField("posts", serializer=BlogChildPagesSerializer(source="get_child_pages"))
    ]

    @property
    def get_child_pages(self):
        return self.get_children().public().live()


class BlogPage(Page):
    """Each individual blog post goes here"""

    blog_subtitle = models.CharField(max_length=100, blank=False, null=True)
    blog_post = RichTextField(features=["bold", "italic"])
    blog_image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    api_fields = [
        APIField("blog_subtitle"),
        APIField("blog_post"),
        APIField(
            "image", serializer=ImageRenditionField("max-500x500", source="blog_image")
        ),
    ]

    content_panels = Page.content_panels + [
        FieldPanel("blog_subtitle"),
        FieldPanel("blog_post"),
        ImageChooserPanel("blog_image"),
    ]

    pass
