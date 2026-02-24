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

# IMPORTANT: expose Render PORT (not fixed 8080)
EXPOSE ${PORT}

# CRITICAL FIX: bind explicitly to Render port
CMD ["sh", "-c", "java -Dserver.port=$PORT -Dserver.address=0.0.0.0 -jar app.jar"]
