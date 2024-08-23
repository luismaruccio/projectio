FROM ruby:3.3.4-slim

WORKDIR /app

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential \
    libpq-dev \
    nodejs \
    postgresql-client \
    git && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/archives

COPY Gemfile Gemfile.lock ./

RUN gem install bundler && bundle install --without development test

COPY . .

EXPOSE 3001

ENV RAILS_ENV=production

CMD ["sh", "-c", "bundle exec rails db:prepare && bundle exec rails db:migrate && bundle exec rails server -p 3001 -b 0.0.0.0"]