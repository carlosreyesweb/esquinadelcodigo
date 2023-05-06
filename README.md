# La Esquina del Código

This is the repo of my personal blog, where I write about programming, software development, and other related topics.
This project is made with Onion Architecture in mind, and it's built with Next.js, TypeScript and Tailwind.

Onion Architecture is a software architecture that promotes the separation of concerns by dividing the application into layers. Each layer is built on top of the previous one, and each one is independent of the others. The layers are:

- Domain
- Application
- Infrastructure

On top of that, I'm using the Vertical Slicing approach, which is a way of organizing the code by features instead of layers. It's like taking the Onion of the Onion Architecture and slicing it as a pie slice, where each slice is a feature or module of the application.

## Modules folder structure

```bash
├───modules
│   ├───newsletter
│   │   ├───application
│   │   ├───domain
│   │   └───infrastructure
│   └───posts
│       ├───application
│       ├───domain
│       └───infrastructure
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
