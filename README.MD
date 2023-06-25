# Food-Ordering.md

Choose a restaurant by wanted features and order your favorite food!
## Getting Started
### Prerequisites :
- Docker
- Git
- python v3.10
- node.js v13.12.0

```
git clone https://github.com/EASS-HIT-PART-A-2022-CLASS-II/food-ordering.git
```
### Install requirements
#### Backend
```
pip install -r backend/requirements.txt
```

### Run locally
#### Backend
```
uvicorn backend.main:app --reload
```
#### Frontend
```
npm run start
```
### Docker run
```
cd path-to-project/backend
docker build -t backend
docker run -d -p 8000:8000 backend
```
```
cd path-to-project/frontend
docker build -t frontend
docker run -d -p 3000:3000 frontend
```

after docker run/ local run open new tab with the URL: http://localhost:3000/

### Run tests
```
pip install Pytest
pytest -q backend/test.py
```

## Features

- List all restaurants around by different features: 
	*  type
	* location
	* menu
- Support ordering delivery from restaurant
- Support restaurant rating

