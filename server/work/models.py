from django.db import models

from wagtail.api import APIField
from wagtail.images.api.fields import ImageRenditionField


from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel

from rest_framework.fields import Field

# Create your models here.


class WorkChildPagesSerializer(Field):
    def to_representation(self, work_pages):

        return_jobs = []
        for job in work_pages:
            post_dict = {
                "id": job.id,
                "title": job.title,
            }
            return_jobs.append(post_dict)
        return return_jobs


class WorkListingPage(Page):
    """Listing page that lists all of the Blog Detail Pages"""

    def get_context(self, request, *args, **kwargs):
        """Adding custom stuff to our context"""
        context = super().get_context(request, *args, *kwargs)
        return context

    api_fields = [
        APIField(
            "jobs",
            serializer=WorkChildPagesSerializer(source="get_child_pages"),
        )
    ]

    @property
    def get_child_pages(self):
        return self.get_children().public().live()


class WorkPage(Page):
    """Each individual blog post goes here"""

    job_title = models.CharField(max_length=100, blank=False, null=True)
    work_image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    api_fields = [
        APIField("job_title"),
        APIField(
            "work_image",
            serializer=ImageRenditionField("max-500x500", source="work_image"),
        ),
    ]

    content_panels = Page.content_panels + [
        FieldPanel("job_title"),
        ImageChooserPanel("work_image"),
    ]

    pass
