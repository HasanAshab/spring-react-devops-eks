#########################
# ---- Stage: base ---- #
#########################
FROM maven:3.8.6-openjdk-11 AS base
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B
COPY . .

##########################
# ---- Stage: dev  ----  #
##########################
FROM base AS dev
ENV JAVA_OPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005"
EXPOSE 8080 5005

CMD ["mvn", "spring-boot:run", "-Dspring-boot.run.fork=false"]

###########################
# ---- Stage: prod  ----  #
###########################
FROM base AS builder
RUN mvn clean package -DskipTests

FROM openjdk:11-jdk-slim AS prod
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
