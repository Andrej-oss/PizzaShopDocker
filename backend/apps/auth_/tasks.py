from django.contrib.auth import get_user_model
from MAIN_APP.celery import app

from .utils import Utils

UserModel = get_user_model()


@app.task
def send_email_task(subject, body, to, **kwargs):
    Utils.send_mail(subject, body, to=to, **kwargs)


# @app.task
# def send_spam():
#     for user in UserModel.objects.all():
#         Utils.send_mail(
#             'СПАМ',
#             'Вы подписались на рассылку, и мы вам будем присылать много спама каждую минуту',
#             [user.email]
#         )
