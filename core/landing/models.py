from django.db import models

'''ladning contact form model email and additional text'''
class Contact(models.Model):
    email = models.EmailField(max_length=100, verbose_name= 'Електронна пошта')
    text = models.TextField(max_length=1000, verbose_name='Супровідний текст')
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
        verbose_name = 'Супровідний текст'
        verbose_name_plural = 'Супровідний текст'
        ordering = ('-created',)
