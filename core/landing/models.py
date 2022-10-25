from django.db import models

'''ladning contact form model email and additional text'''
class Contact(models.Model):
    email = models.EmailField(max_length=100)
    text = models.TextField(max_length=1000)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email

    @property
    def short_text(self):
        return self.text[:20]

    @property
    def created_pretty(self):
        return self.created.strftime('%b %e %Y')
    
    class Meta:
        verbose_name = 'Обратная связь'
        verbose_name_plural = 'Оставленные отзывы'
        ordering = ('-created',)
