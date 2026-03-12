from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    app_name: str = "TG MiniApp API"
    env: str = "dev"

    database_url: str

    jwt_secret: str
    jwt_alg: str = "HS256"
    access_token_expire_minutes: int = 60

    telegram_bot_token: str

    cors_origins: str = ""

    @property
    def cors_origins_list(self) -> list[str]:
        if not self.cors_origins:
            return []
        return [x.strip() for x in self.cors_origins.split(",") if x.strip()]


settings = Settings()