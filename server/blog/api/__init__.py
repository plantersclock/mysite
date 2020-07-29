from rest_framework.routers import DefaultRouter

from .jobs import JobsViewSet

blog_router = DefaultRouter()
blog_router.register(r'jobs', JobsViewSet)
