# -------- BUILD STAGE --------
FROM maven:3.9.6-eclipse-temurin-17 AS builder

WORKDIR /app

# Copy pom.xml first (better caching)
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Build jar
RUN mvn clean package -DskipTests -B


# -------- RUNTIME STAGE --------
FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

# Copy jar from builder
COPY --from=builder /app/target/*.jar app.jar

# Render provides PORT env variable
EXPOSE 8080

# Optimized startup for Render (prevents timeout)
ENTRYPOINT ["sh", "-c", "java \
-Dserver.port=${PORT:-8080} \
-Dspring.datasource.hikari.initializationFailTimeout=0 \
-Dspring.jpa.defer-datasource-initialization=true \
-Dspring.main.lazy-initialization=true \
-Djava.security.egd=file:/dev/./urandom \
-jar app.jar"]
