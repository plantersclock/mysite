from django.db import models

from wagtail.api import APIField
from wagtail.images.models import Image

from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel


from rest_framework.fields import Field

from about.models import AboutMePage
from blog.models import BlogListingPage, BlogPage
from work.models import WorkListingPage, WorkPage


class HomeChildPagesSerializer(Field):
    def to_representation(self, child_pages):

        return_contents = {}
        for child in child_pages:
            details = []
            if child.slug == "blog":

                g_children = BlogListingPage.objects.get(
                    id=child.id
                ).get_children()
                for grand_child in g_children:
                    blog_details = BlogPage.objects.get(id=grand_child.id)
                    image_url = Image.objects.get(
                        id=blog_details.blog_image_id
                    ).file.url
                    grand_child_dict = {
                        "id": grand_child.id,
                        "title": grand_child.title,
                        "image": image_url,
                    }
                    details.append(grand_child_dict)

            elif child.slug == "work":

                jobs = WorkListingPage.objects.get(id=child.id).get_children()
                for job in jobs:
                    job_details = WorkPage.objects.get(id=job.id)

                    image_url = Image.objects.get(
                        id=job_details.work_image_id
                    ).file.url

                    image_w600 = (
                        Image.objects.get(id=job_details.work_image_id)
                        .get_rendition("width-600")
                        .file.url
                    )
                    job_dict = {
                        "id": job.id,
                        "company": job.title,
                        "job_title": job_details.job_title,
                        "image": image_url,
                        "image_6w00": image_w600,
                    }
                    details.append(job_dict)

            elif child.slug == "about":
                details = {}
                about_me_details = AboutMePage.objects.get(id=child.id)

                image_150x150 = (
                    Image.objects.get(id=about_me_details.about_me_headshot_id)
                    .get_rendition("max-150x150")
                    .file.url
                )

                image_w600 = (
                    Image.objects.get(id=about_me_details.about_me_headshot_id)
                    .get_rendition("width-600")
                    .file.url
                )

                detail = {
                    "summary": about_me_details.about_me_summary,
                    "image_150x150": image_150x150,
                    "image_w600": image_w600,
                }
                details.update(detail)

            content_dict = {
                child.slug: {
                    "id": child.id,
                    "title": child.title,
                    "details": details,
                }
            }
            return_contents.update(content_dict)
        return return_contents


class HomePage(Page):
    """Home page model"""

    max_count = 1
    name = models.CharField(max_length=30, blank=False, null=True)

    content_panels = Page.content_panels + [
        FieldPanel("name"),
    ]

    api_fields = [
        APIField("name"),
        APIField(
            "content",
            serializer=HomeChildPagesSerializer(source="get_child_pages"),
        ),
    ]

    @property
    def get_child_pages(self):
        return self.get_children().public().live()

    pass
