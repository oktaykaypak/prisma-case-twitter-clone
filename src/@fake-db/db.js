import "./data/tweets/";
import mock from "./mock";

mock.onAny().passThrough(); // forwards the matched request over network
