from django.contrib import admin
from django.urls import path
from api.views import company_list, company_detail, company_vacancy,vacancy_detail,vacancy_list,vacancy_top_ten
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('login/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('companies/', company_list),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies/', company_vacancy),
 path('vacancies/', vacancy_list),
 path('vacancies/<int:id>/', vacancy_detail),
 path('vacancies/top_ten/', vacancy_top_ten)
]