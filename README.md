# Data Fetcher

`data-fetcher` is a simple project that retrieves data from a backend server via a REST API. This repository contains a TypeScript function that connects to a backend, sends an HTTP request, and returns the data in JSON format.

## Description

This repository includes a TypeScript file (`fetchData.ts`) that uses the `fetch()` method to query a backend API. The function is designed to be easily integrated into projects requiring simple HTTP requests to an API.

### Main Features:
- Sends a GET request to a backend API.
- Retrieves the data in JSON format.
- Handles errors during network requests.

## Prerequisites

Before using this project, ensure that you have the following prerequisites:
- **Node.js**: Used to run TypeScript code and install dependencies.
- **TypeScript**: This project uses TypeScript, so ensure you have `tsc` installed for compiling the code.
- **Backend API**: The code makes calls to a backend server configured at `http://192.168.1.X.X:8000`. Ensure that your server is up and accessible.

## Installation

1. **Clone the repository**:
   If you haven't cloned the repository yet, you can do so by running the following command:

   ```bash
   git clone https://github.com/<chaton2325>/api-data-fetcher-node-js-typescript-
   cd data-fetcher
