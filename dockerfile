# Используем официальный образ Nginx
FROM nginx:alpine

# Устанавливаем рабочую директорию
WORKDIR /usr/share/nginx/html

# Копируем все файлы из папки app в контейнер
COPY ./app .

# Заменяем стандартный конфиг Nginx на наш (если нужно)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]