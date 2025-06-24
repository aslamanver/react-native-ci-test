FROM aslamanver/react-native:1.0.4
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx nx build-android mobile
