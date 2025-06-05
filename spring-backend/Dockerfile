#########################
# ---- Stage: base ---- #
#########################
FROM maven:3.8.6-openjdk-11 AS base

# set work directory
WORKDIR /app

# install maven dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B

# copy project
COPY . .

# expose app
EXPOSE 8080


##########################
# ---- Stage: dev  ----  #
##########################
FROM base AS dev

# run app
CMD ["mvn", "spring-boot:run"]


###########################
# ---- Stage: builder --- #
###########################
FROM base AS builder
# build app
RUN mvn clean package -DskipTests


###########################
# ---- Stage: prod  ----  #
###########################
FROM openjdk:11-jdk-slim AS prod

# set work directory
WORKDIR /app

# copy jar from builder
COPY --from=builder /app/target/*.jar app.jar

# run app
ENTRYPOINT ["java", "-jar", "app.jar"]
