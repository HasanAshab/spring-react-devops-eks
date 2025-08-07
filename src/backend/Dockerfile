# Build stage with Maven and JDK 11
FROM maven:3.8.5-eclipse-temurin-11 AS builder

WORKDIR /app

# Cache dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Build the app
COPY src ./src
RUN mvn install -DskipTests

EXPOSE 8080


# Development stage with Maven
FROM builder AS dev

CMD [ "mvn", "spring-boot:run" ]


# Prepare unpacked JAR for production
FROM builder AS prepare-production
RUN mkdir -p target/dependency
RUN jar -xf ./target/*.jar


# Slim production image with JRE only
FROM eclipse-temurin:11-jre-focal AS prod

VOLUME /tmp

# Copy unpacked app contents
COPY --from=prepare-production /app/META-INF /app/META-INF
COPY --from=prepare-production /app/BOOT-INF/classes /app
COPY --from=prepare-production /app/BOOT-INF/lib /app/lib

# Run the application
ENTRYPOINT [ "java", "-cp","app:app/lib/*", "backend.hobbiebackend.HobbieBackendApplication" ]
 