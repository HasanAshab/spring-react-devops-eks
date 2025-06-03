# ---------- Stage 1: Build the application ----------
FROM maven:3.8.6-openjdk-11 AS builder

# Set working directory
WORKDIR /build

# Install maven dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy project
COPY . .

# Package the application
RUN mvn clean package -DskipTests


# ---------- Stage 2: Runtime ----------
FROM openjdk:11-jdk-slim

# Set working directory
WORKDIR /app

# Copy the built jar from the builder stage
COPY --from=builder /build/target/*.jar app.jar

# Expose port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
