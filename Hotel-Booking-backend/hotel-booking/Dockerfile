# -------- BUILD STAGE --------
FROM maven:3.9.6-eclipse-temurin-17 AS builder

WORKDIR /app

# Copy pom.xml first for caching dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy source code
COPY src ./src

# Build jar
RUN mvn clean package -DskipTests

# -------- RUNTIME STAGE --------
FROM eclipse-temurin:17-jre-focal

WORKDIR /app

# Copy generated jar
COPY --from=builder /app/target/*.jar app.jar

# Expose default port (Render overrides with PORT env variable)
EXPOSE 8080

# IMPORTANT: Bind to Render PORT
ENTRYPOINT ["sh", "-c", "java -Dserver.port=${PORT:-8080} -jar app.jar"]
