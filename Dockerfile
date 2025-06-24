FROM aslamanver/react-native:1.0.4
WORKDIR /app
COPY . .
RUN npm install
RUN npx nx build-android mobi1le
