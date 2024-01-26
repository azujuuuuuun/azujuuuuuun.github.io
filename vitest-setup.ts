import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.stubEnv("STORAGE_ACCESS_KEY_ID", "accessKeyId");
vi.stubEnv("STORAGE_SECRET_ACCESS_KEY", "secretAccessKey");
vi.stubEnv("STORAGE_API_ENDPOINT", "https://example.com");
vi.stubEnv("GCS_BUCKET_NAME", "bucketName");
vi.stubEnv("GCS_FILE_NAME", "fileName");
