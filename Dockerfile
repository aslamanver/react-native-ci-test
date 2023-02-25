FROM aslamanver/react-native:1.0.1
WORKDIR /app
COPY . .
RUN npm install
RUN npx nx build-android mobi1le
