import { Metadata } from "next";
import Heading from "@/components/atoms/Heading";

export const metadata: Metadata = { title: "Introduction" };

function Page() {
    return (
        <div className="flex flex-col gap-2">
            <Heading variant="h1">
                Introduction
            </Heading>

            <p>
                Tired of writing Next.js endpoints from simple functions?
                <br />
                This lightweight, zero-dependency Next.js API library is designed to make creating endpoints effortless, extensible, and type-safe.
                <br />
                Build robust APIs on your logic - not the boring way.
                <br />
                Whether you're crafting a simple REST endpoint or a scalable backend, enjoy seamless integration, clean code, and full TypeScript support.
                <br />
                Setup once - extend anytime.
            </p>

            <Heading variant="h2" hash="what-is-quality-api">
                What exactly is Quality API?
            </Heading>

            <p>
                Quality API is an open-source library designed as a lightweight wrapper for Next.js API endpoints.
                It simplifies the process of creating, managing, and standardizing API routes in Next.js applications, providing developers with a streamlined way to handle requests, responses, and common API-related tasks.
                By abstracting away boilerplate code and offering built-in utilities, Quality API helps ensure consistency, reliability, and maintainability in your API layer.
            </p>

            <Heading variant="h2" hash="why-use-quality-api">
                Why use Quality API?
            </Heading>

            <Heading variant="h3">
                Quit the context-switching
            </Heading>

            <p>
                Quality API eliminates the need to context-switch between your frontend and a separate backend codebase by allowing you to build, test, and iterate on your API logic directly within your Next.js project.
                This integration streamlines development, reduces cognitive overhead, and accelerates iteration—all while keeping your codebase cohesive, your tooling consistent, and your deployment process simpler.
                The result is faster, more maintainable development without sacrificing flexibility or scalability.
            </p>

            <p>Centralize your project.</p>

            <Heading variant="h3">
                Get away from type-induced headaches
            </Heading>

            <p>
                Type-safety provides compile-time guarantees that your data conforms to expected structures, catching errors early and reducing runtime bugs.
                Unlike guessing types or using workarounds like <code>as</code>, <code>any</code>, or type assertions, which bypass checks and risk silent failures, type-safety ensures reliability, improves maintainability, and enhances developer experience with autocompletion and clear contracts.
                This leads to more robust, predictable, and self-documenting code.
            </p>

            <Heading variant="h3">
                Lightweight
            </Heading>

            <p>
                Quality API has zero dependencies - it's purely TypeScript.
                <br />
                The dependencies are what you want them to be.
            </p>
        </div>
    );
}

export default Page;