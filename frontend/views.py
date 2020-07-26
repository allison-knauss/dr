from django.shortcuts import render
from django.conf import settings


def index(request):
    return render(request, 'frontend/index.html', context={'gql': settings.GQL_URI})

