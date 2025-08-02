import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {Badge} from "@/components/ui/badge.tsx";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch("https://formspree.io/f/xjkoeyyn", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        setLoading(false);
        if (response.ok) {
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <section className="relative py-10 sm:py-10 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                            Contact Us
                        </Badge>
                        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-foreground mb-4">
                            Get in Touch with Us
                        </h1>
                        <p className="text-sm sm:text-sm text-muted-foreground max-w-3xl mx-auto">
                            Whether you have questions about our products, export inquiries, or partnership opportunities, we're here to help. Reach out to our team today.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-2xl mx-auto py-12 sm:py-16 bg-white">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-foreground">Get in Touch</CardTitle>
                        <p className="text-muted-foreground text-sm">
                            Fill out the form and our team will reach out to you shortly.
                        </p>
                    </CardHeader>
                    <CardContent>
                        {submitted ? (
                            <div className="text-green-600 font-semibold text-center py-8">
                                ✅ Your form has been submitted successfully!
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                                        Name
                                    </label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                                        Message
                                    </label>
                                    <Textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                <Button type="submit" className="w-full" disabled={loading}>
                                    {loading ? "Submitting..." : "Send Message"}
                                </Button>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Contact;
